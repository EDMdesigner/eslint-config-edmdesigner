skipRemainingStages = false
pipeline {
	agent any
	tools {
		nodejs 'Node 16'
	}
	stages {
		stage('pr check') {
			when {
				changeRequest target: 'master'
			}
			steps {
				sh '''
					#!/bin/sh
					echo $CHANGE_BRANCH
					if echo "$CHANGE_BRANCH" | grep -Eq '^release/.+';
					then
						exit 0
					else
						echo 'You can merge to the master branch only from the release/* branches!'
						exit 1
					fi
				'''
			}
		}
		stage('pr build skipper') {
			when {
				changeRequest()
			}
			steps {
				script {
					skipRemainingStages = true
					println "skipRemainingStages = ${skipRemainingStages}"
				}
			}
		}
		stage('install') {
			when {
				expression { !skipRemainingStages }
			}
			steps {
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm install'
				}
			}
		}
		stage('audit') {
			when {
				expression { !skipRemainingStages }
			}
			steps {
				script {
					try {
						sh 'npm audit --production'
					} catch (err) {
						echo "npm audit found vulnerabilities but we're continuing the build"
					}
				}
			}
		}
		stage('environment branch') {
			when {
				allOf {
					expression { !skipRemainingStages }
					branch "environment/**"
				}
			}
			steps {
				sh 'npm run semverCheck'
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm publish --tag next'
				}
			}
		}
		stage('NPM publish to github pacakges') {
			when {
				allOf {
					expression { !skipRemainingStages }
					branch "master"
				}
			}
			steps {
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm publish'
				}
			}
		}
		stage('NPM publish to npmjs.com') {
			when {
				allOf {
					expression { !skipRemainingStages }
					branch "master"
				}
			}
			steps {
				script {
					sh '''
						#!/bin/bash
						sed -i 's/@EDMdesigner\/eslint-config-edmdesigner/@chamaileon-sdk\/eslint-config/' ./package.json
						sed -i 's/@EDMdesigner\/eslint-config-edmdesigner/@chamaileon-sdk\/eslint-config/' ./README.md
						sed -i 's/ESlint base config for EDMdesigner repositories/ESlint base config for Chamaileon SDK repositories/' ./package.json
					'''

					withNPM(npmrcConfig:'npmrc-chamaileon-sdk') {
						sh 'npm publish --access public'
					}
				}
			}
		}
	}
	post {
		always {
			cleanWs()
		}
		failure {
			slackSend color: 'danger', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
		}
		success {
			slackSend color: 'good', message: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
		}
		unstable {
			slackSend color: 'warning', message: "UNSTABLE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
		}
	}
}

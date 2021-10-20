
pipeline {
	agent any
	tools {
		nodejs 'Node 8.10.0'
	}
	stages {
		stage('build') {
			steps {
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm install'
				}
			}
		}
		stage('environment branch') {
			when {
				branch "environment/**"
			}
			steps {
				sh 'npm run semverCheck'
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm publish'
				}
			}
		}
		stage('NPM publish [master]') {
			when {
				branch "master"
			}
			steps {
				withNPM(npmrcConfig:'npmrc-github') {
					sh 'npm publish'
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

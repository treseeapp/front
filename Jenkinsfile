pipeline {
  agent any
  stages {
    stage('Instalamos dependencias') {
      steps {
        slackSend (channel: '#ci-front', color: '#1126c2', message: "Empezamos tarea: '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        sh  '''
            echo "Instalamos dependencias"
            npm i
            '''
      }
      post {
        success {
            slackSend (channel: '#ci-front', color: '#3ab811', message: "Dependencias instaladas: Success '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
        }
        failure {
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Dependencias instaladas: Failure '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Tarea acabada: HA HABIDO UN ERROR'${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
      }
    }
    stage('Compilamos') {
      steps {
        sh  '''
            echo "Compilamos "
            npm run build
            '''
      }
      post {
        success {
            slackSend (channel: '#ci-front', color: '#3ab811', message: "Compile: Success '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
        }
        failure {
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Compile: Failure '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Tarea acabada: HA HABIDO UN ERROR '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
      }
    }
    stage('Notificamos end of desarrollo pipe') {
      when{
          branch 'desarrollo'
      }
      steps {
        slackSend (channel: '#ci-front', color: '#1126c2', message: "Job dev: TERMINADO OK '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
      }

    }

    stage('Desplegamos apache') {
      when{
          branch 'Produccion'
      }

      steps{
        sh '''
          ls -la /var/www/tresee/
          rm -rf /var/www/tresee/*
          mv dist/spa/* /var/www/tresee/
          ls -la /var/www/tresee/
        '''
      }
      post {
        success {
            slackSend (channel: '#ci-front', color: '#3ab811', message: "Deploy: Success '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
            slackSend (channel: '#ci-front', color: '#1126c2', message: "Tarea acabada: OK '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        failure {
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Deploy: Failure '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            slackSend (channel: '#ci-front', color: '#fc3903', message: "Tarea acabada: BAD_STATUS '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
      }
    }
  }
}

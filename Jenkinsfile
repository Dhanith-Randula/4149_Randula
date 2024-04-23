pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/Dhanith-Randula/4149_Randula.git'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t dragondrr/my-app:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-drr', variable: 'drr')]) {
   
               bat'docker login -u dragondrr -p ${drr}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push dragondrr/my-app:%BUILD_NUMBER% '
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
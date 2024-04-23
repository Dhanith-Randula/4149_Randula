
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git 'https://github.com/Dhanith-Randula/4149_Randula.git'
            }
        }
        stage('Dockerize') {
            steps {
                // Build Docker image
                script {
                    docker.build('my-app')
                }
            }
        }
        stage('Run Container') {
            steps {
                // Run Docker container
                script {
                    docker.image('my-app').run('-p 3000:3000')
                }
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t webv2:latest .'
            }
        }
        stage('Test') {
            steps {
                echo 'Would run unit tests here...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'docker stop webv2 || true'
                sh 'docker rm webv2 || true'
                sh 'docker run -d --name webv2 \
                    --restart always \
                    --network=webnetwork \
                    webv2:latest'
            }
        }
    }
}
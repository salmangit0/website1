pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh'''
                git clone https://github.com/salmangit0/website1.git
                ls -l
                echo Current user:
                echo $USER
               '''
            }
        }
        stage('deploy'){
            steps{
                sh'''
                rm -rf /var/www/html/*
                cp -r website1/* /var/www/html
                '''
            }
        }
    }
}

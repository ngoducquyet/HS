node('master') {
  stage('Pull jenkinsfile') {
      checkout scm
  }
  stage('Bump HS'){
    catchError {
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/HS.git"),
    ]
  }
    echo "Khong bump"
  }
  stage('Bump cicd'){
    catchError {
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/cicd.git"),
    ]
  }
    echo currentBuild.result
  }
  stage('Bump Jenkinsfile'){
    catchError {
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/Jenkinsfile.git"),
    ]
  }
    echo currentBuild.result
  }
  
}

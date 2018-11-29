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
    echo "Ket qua"
    echo currentBuild.result
  }
  stage('Bump cicd'){
    catchError {
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/cicd.git"),
    ]
  }
    echo "Ket qua"
    echo currentBuild.result
  }
  stage('Bump Jenkinsfile'){
    catchError {
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/Jenkinsfile.git"),
    ]
  }
    echo "Ket qua"
    echo currentBuild.result
  }
  
}

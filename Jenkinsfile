node('master') {
  stage('Pull jenkinsfile') {
      checkout scm
  }
  stage('Bump HS'){
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/HS.git"),
    ]
  }
}

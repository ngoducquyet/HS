node('master') {
  stage('Pull jenkinsfile') {
      checkout scm
  }
  stage('Bump HS'){
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/HS.git"),
    ]
  }
  stage('Bump cicd'){
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/cicd.git"),
    ]
  }
  stage('Bump Jenkinsfile'){
    build job:'Bump.develop', parameters: [
        string(name: 'repository', value: "https://github.com/ngoducquyet/Jenkinsfile.git"),
    ]
  }
  
}

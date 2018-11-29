node('master') {
  stage('Pull jenkinsfile') {
      checkout scm
  }
  stage('Bump HS'){
      build job: 'Bump.develop', parameters: [[$class: 'StringParameterValue', name: 'ParamA', value: paramAValue], [$class: 'StringParameterValue', name: 'ParamB', value: paramBValue]]
  }
}

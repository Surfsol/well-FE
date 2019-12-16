abcd@gmail.com
Copyright8!

abc@gmail.com
123

set environment variables

yarn add env-cmd

create files for different environments
.env-cmdrc

    variable must start with REACT_APP_
{
    "dev" : {
        "REACT_APP_TOKEN" : "pk.ey"
    },
    "qa" : {
        "REACT_APP_TOKEN" : "pk.ey"
    },
    "prod" : {
        "REACT_APP_TOKEN" : "pk.ey"
    }
}

package.json
- need to add commands to react script

 "scripts": {
    "start-dev": "env-cmd -e dev react-scripts start",

---------------------------------------------------------------------
api key for react map
-needed to register with email
https://account.mapbox.com/access-tokens/
  
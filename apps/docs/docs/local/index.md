# Local DFM Server

This is the user installed local version of the DFM service. To ensure the privacy and protection of confidential data, a large amount of functionality is done locally on the users machine with only some relevant metadata being sent to the DFM server. 

## First Run / Every Run

At every single startup, we need to make sure that everything is in good working order and attempt to self heal any issues. 

We need to make sure the local ~/.dfm directory 

* Exists
* Is in good working order
* All of the values are sensible and won't cause any operating issues

The [ConfigManager](/docs/local/configmanager) is responsible for this.
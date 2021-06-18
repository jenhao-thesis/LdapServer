## LDAP server

Implementation of LDAP server for user authentication. This server is the in-memory LDAP server (IM-LDAP) and it is for non-production environments.

## Getting started



## Prerequisites

* node
  ```sh
  apt install nodejs
  node -v
  ```

* npm 
  ```sh
  apt install npm
  npm -v
  ```

* OpenLDAP
  ```sh
  apt-get install slapd ldap-utils
  ```


### Installation

1. Clone the repo
    ```sh 
    git clone https://github.com/jenhao-thesis/LdapServer.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Launch a node app
    ```sh
    node ldapServer.js
    ```


### Setup LDAP server

The `qwer.ldif` is a pre-define hierarchical directory structure file.
1. Initial a hierarchical directory structure for user data
    ```sh
    ldapadd -H ldap://localhost:1389 -D "cn=root" -w secret -f qwer.ldif
    ```

2. (optional) Search specific user
    ```sh
    ldapsearch -H ldap://localhost:1389 -x -D "cn=root" -w "secret" -b "ou=location2,dc=jenhao,dc=com"
    ```
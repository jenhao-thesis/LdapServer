# LDAP server

## LDAP server setup

qwer.ldif is pre-define user and organization chart.

```
node ldapServer.js
ldapadd -H ldap://localhost:1389 -D "cn=root" -w secret -f qwer.ldif
ldapsearch -H ldap://localhost:1389 -x -D "cn=root" -w "secret" -b "ou=location2,dc=jenhao,dc=com"
```
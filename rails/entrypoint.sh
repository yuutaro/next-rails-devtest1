#!/bin/bash
set -e

rm -f /myapp/tmp/pids/server.pid

USERID=${LOCAL_USER_ID:-1000}
GROUPID=${LOCAL_GROUP_ID:-1000}

echo "UserName: dockeruser, UserID: $USERID, GroupID: $GROUPID"
groupadd -g $GROUPID dockeruser
useradd -m -s /bin/bash -u $USERID -g $GROUPID dockeruser

chown -R dockeruser:dockeruser /myapp

exec /usr/sbin/gosu dockeruser "$@"
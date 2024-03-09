#!/bin/bash
set -e

rm -f /myapp/tmp/pids/server.pid

USERID=${LOCAL_USER_ID}
GROUPID=${LOCAL_GROUP_ID}

echo "UserName: dockeruser, UserID: $USERID, GroupID: $GROUPID"
groupadd -g $GROUPID dockeruser
useradd -m -s /bin/bash -u $USERID -g $GROUPID dockeruser

chown -R dockeruser:dockeruser /myapp

exec /usr/sbin/gosu dockeruser "$@"
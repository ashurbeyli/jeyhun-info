source /home/ec2-user/.bash_profile

# update instance
yum -y update

# install node and npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v10.0.0

# install yarn
npm install yarn -g

# install pm2 module globally
npm install -g pm2
pm2 update
# Run instructions

## 1. Clone repository to local directory

## 2. Run npm install

## 3. Run npm build

## 4. Add the following line to your hosts file

Usual file location: C:\Windows\System32\drivers\etc\

127.0.0.1  personal-info-dev.com

## 5. Add new site in IIS with the following configurations

Choose the /build directory as the site path

Protocol: HTTPS

Port: 443

Custom Domain: personal-info-dev.com

IIS Development certificate

## 6. Once the site is running, you can confirm by open the following URL

https://personal-info-dev.com

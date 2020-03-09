---
title: "Hướng dẫn cài đặt nhiều phiên bản PHP trên Mac"
date: "2020-01-25"
layout: post
draft: true
path: "/posts/cai-dat-nhieu-phien-ban-php-mac/"
category: "Development"
tags:
  - "Mac"
  - "Development Setup"
description: "Thiết lập môi trường làm việc cho PHP Developer, cài đặt nhiều phiên bản PHP trên Mac OSX 10.15"
---

## Cài đặt Homebrew
Homebrew là phần mềm quản lý package cho Mac

```shell script
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Catalina Required Libraries

When installing fresh on Catalina, I ran into a few libraries that were missing when completing all the steps below. To make things easier, please simply run these now:

```shell script
brew install openldap libiconv
```

### Cài đặt PHP
PHP 5.6, PHP 7.0, and PHP 7.1 have been deprecated and removed from Brew because they are out of support, and while it's not recommended for production, there are legitimate reasons to test these unsupported versions in a development environment.

Remember only PHP 7.2 through 7.4 are officially supported by Brew so if you want to install PHP 5.6, PHP 7.0, or PHP 7.1 you will need to add this tap:
```shell script
$ brew tap exolnet/homebrew-deprecated

$ brew install php@5.6
$ brew install php@7.0
$ brew install php@7.1
$ brew install php@7.2
$ brew install php@7.3
$ brew install php@7.4
```

### PHP Switcher Script

We hard-coded Apache to use PHP 5.6, but we really want to be able to switch between versions. Luckily, some industrious individuals have already done the hard work for us and written a very handy little PHP switcher script.

We will install the sphp script into brew's standard /usr/local/bin:
```shell script
$ curl -L https://gist.githubusercontent.com/rhukster/f4c04f1bf59e0b74e335ee5d186a98e2/raw > /usr/local/bin/sphp
$ chmod +x /usr/local/bin/sphp
```

### Testing the PHP Switching

After you have completed these steps, you should be able to switch your PHP version by using the command sphp followed by a two digit value for the PHP version:
```shell script
$ sphp 7.1
```






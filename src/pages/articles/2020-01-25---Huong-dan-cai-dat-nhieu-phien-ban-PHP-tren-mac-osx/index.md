---
title: "Hướng dẫn cài đặt nhiều phiên bản PHP trên Mac"
date: "2020-01-25"
layout: post
draft: false
path: "/posts/cai-dat-nhieu-phien-ban-php-mac/"
category: "Development"
tags:
  - "Mac"
  - "Development Setup"
description: "Thiết lập môi trường làm việc cho PHP Developer, cài đặt nhiều phiên bản PHP trên Mac OSX 10.15"
---
Bài viết gốc: https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions

## Cài đặt Homebrew
Homebrew là phần mềm quản lý package cho Mac, một công cụ không thể thiếu nếu bạn phát triển phần mềm trên Mac OS.

```shell script
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Cài đặt PHP
Sử dụng dòng lệnh sau để cài đặt PHP từ 7.2 đến 7.4. Tại thời điểm hiện tại, đây là những phiên bản PHP còn được hỗ trợ chính thức, các phiên bản cũ hơn sẽ không còn nhận được cập nhật nữa, cho nên mình không khuyến cáo sử dụng để phát triển app 
```shell script
$ brew install php@7.2
$ brew install php@7.3
$ brew install php@7.4
```

Tuy nhiên nếu bạn vẫn muốn sử dụng những phiên bản PHP cũ hơn thì bạn bạn có thể sử dụng dòng lệnh sau để cài đặt
```shell script
$ brew tap exolnet/homebrew-deprecated

$ brew install php@5.6
$ brew install php@7.0
$ brew install php@7.1
```

### Cài đặt PHP Switcher Script

PHP Switcher là phần mềm giúp bạn chuyển đổi giữa các phiên bản PHP chỉ với một câu lệnh .

Cài đặt PHP Switcher bằng câu lệnh sau
```shell script
$ curl -L https://gist.githubusercontent.com/rhukster/f4c04f1bf59e0b74e335ee5d186a98e2/raw > /usr/local/bin/sphp
$ chmod +x /usr/local/bin/sphp
```

### Testing the PHP Switching

Sau khi hoàn thành các bước trên, bạn đã có thể xài câu lệnh sau để chuyển phiên bản PHP trên máy tính của bạn bằng câu lệnh sau
```shell script
$ sphp {php version}
// ví dụ:
$ sphp 7.1
```






function content() {
	var markup = '<!DOCTYPE html>' +
'<html>' +
    '<head>' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<link rel="stylesheet" href="../login.css">' +
        '<!-- Leapstrap -->' +
        '<link rel="stylesheet" href="http://wilkesalex.github.io/leapstrap/dist/css/leapstrap.css" />' +
        '<!-- jQuery (necessary for Leapstrap\'s JavaScript plugins) -->' +
        '<script src="http://code.jquery.com/jquery-1.10.2.js"></script>' +
        '<!-- Leap (http://js.leapmotion.com/) -->' +
        '<script src="http://js.leapmotion.com/0.3.0-beta3/leap.js"></script>' +
        '<!-- Leapstrap -->' +
        '<script src="../login.js"></script>' +


    '</head>' +
    '<body>' +

            '<div class="container">' +
             '   <section class="loginform cf" id = "login-form">' +
              '      <form name="login" action="index_submit" method="get" accept-charset="utf-8">' +
               '         <ul>' +
                '            <label for="username">Username</label>' +
                 '           <li>' +

'                                <input type="text" name="username" placeholder="username" required>' +
 '                           </li>' +
  '                          <label for="password">Password</label>' +
   '                         <li>' +
    '                            <input type="password" name="password" placeholder="password" required>' +
     '                       </li>' +
      '                      <li>' +
       '                         <input type="submit" value="Login">' +

'                            </li>' +
 '                           <li>' +
  '                              <a href="createAccount.html" style="text-decoration : none">' +
   '                                 <input type="button" value="Create an Account">' +
    '                            </a>' +
     '                       </li>' +
      '                  </ul>' +
       '             </form>' +
        '        </section>' +
         '   </div>' +

        '<script>LeapManager.init({interactiveSelector:"a",maxCursors:1});</script>' +
    '</body>' +
'</html>';

	return markup;
}

exports.content = content
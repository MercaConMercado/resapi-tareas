import app from './app';
import './database';

/*Run Server*/
app.listen(app.get('port'), function () {
    console.log(app.get('App name'));
    console.log('server on port:', app.get('port'));

}); 
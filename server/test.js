var netstat = Meteor.npmRequire('node-netstat');

netstat({
  filter: {
    pid: 4123,
    protocol: 'tcp'
  },
  limit: 5
}, function (data) {

  console.log(1);

  console.log(data);
  // a single line of data read from netstat
});

if (Meteor.isServer) {
  Meteor.methods({
    'getGists': function getGists(user) {
      var GithubApi = Meteor.npmRequire('github');
      var github = new GithubApi({
        version: "3.0.0"
      });

      var gists = Async.runSync(function(done) {
        github.gists.getFromUser({user: user}, function(err, data) {
          done(null, data);
        });
      });

      return gists.result;
    },

    'testJela': function testJela() {

      console.log(1);

      var netstat = Meteor.npmRequire('netstat');

      var data = Async.runSync(function(done) {

      netstat.on( 'stdout', function( data ){

        data.results = JSON.stringify( netstat.parse( data ), null, 2 ) + '\n';

        done(null, data);

        /*process.stdout.write(
          JSON.stringify( netstat.parse( data ), null, 2 ) + '\n'
        );*/
      });

      });

      netstat.on( 'stderr', function( err ) {

        //console.log(err);

        //process.stderr.write( err );
      });

        return data

    }
  });
}
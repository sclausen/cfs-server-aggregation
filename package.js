Package.describe({
    summary: "Expose mongodb aggregation (mapReduce, aggregate and distinct), to a FS.Collection SERVER side only.",
    version: '1.0.0',
    name: 'phosphoros:cfs-server-aggregation',
    git: 'https://github.com/sclausen/cfs-server-aggregation.git'
});

Npm.depends({mongodb: "1.4.19"});

Package.on_use(function (api, where) {
    if(api.versionsFrom !== undefined) api.versionsFrom('METEOR@1.0');

    api.use('underscore', ['server']);
    api.use('cfs:standard-packages@0.0.2', ['server']);

    api.add_files('server.js', 'server');
});

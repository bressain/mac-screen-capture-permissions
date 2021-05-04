const os = require('os');
const {spawnSync} = require('child_process');

if (process.env.npm_config_platform) {
	if (process.env.npm_config_platform === 'darwin') {
		runBuild()
	}
} else if (os.platform() === 'darwin') {
	runBuild()
}

function runBuild() {
	spawnSync('npm', ['run', 'native_build'], {
		input: 'darwin detected. Build native module.',
		stdio: 'inherit'
	});
}
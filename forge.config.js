module.exports = {
    "make_targets": {
        "win32": [
            "zip",
            "squirrel"
        ],
        "darwin": [
            "zip",
            "dmg"
        ],
        "linux": [
            "zip",
            "deb",
            "rpm"
        ]
    },
    "electronPackagerConfig": {
        "ignore": [
            "built",
            "coverage",
            "scripts",
            "test",
            ".nyc_output",
            ".vscode",
            "python",
            "pytools",
            "[a-z_\-]*.yml",
            "[a-z_\-]*.log"
        ]
    },
    "electronWinstallerConfig": {
        "iconUrl": "https://raw.githubusercontent.com/VideoClient/video-client/master/app/icon/icon.ico"
    },
    "electronInstallerDebian": {
        "icon": "app/icon/icon.png",
            "categories": [
                "Video"
        ]
    },
    "electronInstallerRedhat": {
        "icon": "app/icon/icon.png",
        "categories": [
            "Video"
        ]
    },
    "electronInstallerDMG": {
        "icon": "app/icon/icon.icns",
        "icon-size": 64
    },
    "github_repository": {
        "owner": "VideoClient",
        "name": "video-client",
        "draft": true
    },
    "windowsStoreConfig": {
    "packageName": ""
    }
};
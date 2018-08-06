define({ "api": [
  {
    "type": "post",
    "url": "/version",
    "title": "To add app details.",
    "name": "addVersion",
    "group": "AppDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>Required Version number of the application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileUrl",
            "description": "<p>Required File URL of application.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appCode",
            "description": "<p>Required App code [SDC/ SNC/ SLC].</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AppDetailsAlreadyExists",
            "description": "<p>The app details you are trying to save is already exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorSavingData",
            "description": "<p>Error occurred while saving the app details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "VersionDataAlreadyExists-Response:",
          "content": "{\n   success: false,\n   message: 'App details already exists.'\n}",
          "type": "json"
        },
        {
          "title": "ErrorSavingData-Response:",
          "content": "{\n   success: false,\n   message: 'Error while saving the app details.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response : ",
          "content": "{\n   success: true,\n   message: 'App details saved successfully.'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/appVersion.controller.js",
    "groupTitle": "AppDetails"
  },
  {
    "type": "get",
    "url": "/version/latest",
    "title": "To get latest version of an app.",
    "name": "getLatestVersion",
    "group": "AppDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appCode",
            "description": "<p>Required App code [SDC/ SNC/ SLC].</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorWhileGettingLatestVersion",
            "description": "<p>Error occured while getting latest version</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LatestVersionNotFound",
            "description": "<p>No latest version found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ErrorWhileGettingLatestVersion-Response:",
          "content": "{\n  success: false,\n  message: 'Error while getting latest version.'\n}",
          "type": "json"
        },
        {
          "title": "latestVersionNotFound-Response : ",
          "content": "{\n  success: false,\n  message: 'Latest version not found'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n  success: true,\n  version: package version,\n  fileName: Name of the file,\n  fileUrl: URL of package,\n  appCode: compatable device type,\n  createdOn: created date,\n  checksum: package checksum\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/appVersion.controller.js",
    "groupTitle": "AppDetails"
  },
  {
    "type": "get",
    "url": "/version/updated",
    "title": "To get the list of all updated versions .",
    "name": "getUpdatedVersions",
    "group": "AppDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appCode",
            "description": "<p>Required App code [SDC/ SNC/ SLC].</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "version",
            "description": "<p>Required current version.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorWhileGettingUpdatedVersions",
            "description": "<p>Error while gettng updated versions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ErrorWhileGettingUpdatedVersions-Response:",
          "content": "{\n  success: false,\n  message: 'Error while getting updated versions.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response : ",
          "content": "{\n  success: true,\n  list: Array of all updated version objects.\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/appVersion.controller.js",
    "groupTitle": "AppDetails"
  },
  {
    "type": "get",
    "url": "/version/list",
    "title": "To get the list of all versions.",
    "name": "listAllVersions",
    "group": "AppDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appCode",
            "description": "<p>Required App code [SDC/ SNC/ SLC].</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorWhileGettingVersions",
            "description": "<p>Error while gettng versions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ErrorWhileGettingVersions-Response:",
          "content": "{\n  success: false,\n  message: 'Error while getting versions.'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response : ",
          "content": "{\n  success: true,\n  list: Array of all version objects\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/appVersion.controller.js",
    "groupTitle": "AppDetails"
  }
] });

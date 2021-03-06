// get remote from electron
const { remote } = require('electron');

// ipc renderer for communicating with main process
const { ipcRenderer } = require('electron');

// dialog module for dialogs
const { dialog } = remote;

// get shell module for opening URLs with default browser, etc.
const { shell } = require('electron');

// get Menu class for setting application menu
const { Menu } = remote.require('electron');

// get used modules and store in vars

// get fs module from remote module to read and write from filesystem
const fs = remote.require('fs');

// path for working with paths
const path = remote.require('path');

// get encrypt-with-password module for encryption
const { encryptJSON, decryptJSON } = remote.require('encrypt-with-password');

// get uuid module for generating random IDs
const uuid = remote.require('uuid');

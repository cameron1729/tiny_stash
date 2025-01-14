// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Options helper for Tiny stash plugin.
 *
 * @module      tiny_stash/options
 * @copyright   2023 Adrian Greeve <adriangreeev.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getPluginOptionName} from 'editor_tiny/options';
import {pluginName} from 'tiny_stash/common';

const permissionsName = getPluginOptionName(pluginName, 'canmanage');
const courseId = getPluginOptionName(pluginName, 'courseid');

/**
 * Register the options for the Tiny H5P plugin.
 *
 * @param {TinyMCE} editor
 */
export const register = (editor) => {
    const registerOption = editor.options.register;

    registerOption(permissionsName, {
        processor: 'boolean',
        "default": false
    });
    registerOption(courseId, {
        processor: 'number',
        "default": 0
    });
};
/**
 * Get the permissions configuration for the Tiny H5P plugin.
 *
 * @param {TinyMCE} editor
 * @returns {object}
 */
const permissionGetter = (editor) => editor.options.get(permissionsName);

/**
 * Check whether we can manage.
 *
 * @param {TinyMCE} editor
 * @returns {boolean}
 */
export const canManage = (editor) => {
    let permissions = '';
    permissions = permissionGetter(editor);
    return permissions;
};

export const getCourseId = (editor) => {
    return editor.options.get(courseId);
};



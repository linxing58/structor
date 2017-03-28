/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import validator from 'validator';
import {bindActionCreators} from 'redux';
import {hideInstaller} from 'modules/app/containers/AppContainer/actions';
import {
	showModal as showDirPathModal
} from 'modules/installer/containers/SelectDirectoryModal/actions';

export const INSTALL_FROM_DIRECTORY = "Installer/INSTALL_FROM_DIRECTORY";

export const installFromDir = (dirPath) => (dispatch, getState) => {
	dispatch({type: INSTALL_FROM_DIRECTORY, payload: {dirPath}});
};

// export const stepToStage = (stage) => ({type: STEP_TO_STAGE, payload: stage});
// export const setComponentMetadata = (metaData, metaHelp) => (dispatch, getState) => {
// 	dispatch({type: SET_COMPONENT_METADATA, payload: {metaData, metaHelp}});
// };

export const containerActions = (dispatch) => bindActionCreators({
	hideInstaller, showDirPathModal
}, dispatch);
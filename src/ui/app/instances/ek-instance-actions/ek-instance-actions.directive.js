/*
Copyright 2016 ElasticBox All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import './ek-instance-actions.less';
import Directive from 'directive';
import constants from '../constants';
import Controller from './ek-instance-actions.controller';
import template from './ek-instance-actions.html';

class InstanceActionsDirective extends Directive {
    constructor() {
        super({ Controller, template });

        this.bindToController = {
            instance: '='
        };
    }

    compile(tElement) {
        tElement.addClass('ek-instance-actions');

        return ($scope, $element, $attrs, $controller) => {
            _.extend($scope, constants);

            $controller.drop = $element.find('ek-drop').controller('ekDrop');
        };
    }
}

export default InstanceActionsDirective;

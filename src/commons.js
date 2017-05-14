import _ from 'lodash';

export default function(whatToJoin) {
    const element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(whatToJoin, ' ');

    return element;
}

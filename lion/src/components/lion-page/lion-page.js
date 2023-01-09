const { Heading } = require('../heading/heading');
const { LionImg } = require('../lion-img/lion-img');
import _ from 'lodash'

export class LionPage {
  render() {
    Heading.render(_.upperFirst('lion'));
    LionImg.render();
  }
}

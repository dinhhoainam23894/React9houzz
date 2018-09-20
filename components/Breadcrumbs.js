import React from "react";
import {Link} from "../routes";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {breadcrumb} = this.props;
    return (
      <div>
        {
          breadcrumb &&
          <ol className="breadcrumb bg-white mb-0">
            {
              breadcrumb.home &&
              <li className="breadcrumb-item" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                <Link route={breadcrumb.home.uri}><a itemProp="url">
                  <span itemProp="title" className="font-13">{breadcrumb.home.name}</span></a>
                </Link>
              </li>
            }
            {
              breadcrumb.sub_items &&
              <li className="breadcrumb-item" itemScope itemType="http://data-vocabulary.org/Breadcrumb">
                <Link route={breadcrumb.sub_items.uri}>
                  <a itemProp="url">
                    <span itemProp="title" className="font-13">{breadcrumb.sub_items.name}</span>
                  </a>
                </Link>
              </li>
            }
          </ol>
        }
      </div>
    )
  }
}
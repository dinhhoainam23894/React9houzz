
export const rating = (avg_rate) => {
    const star = [];
    for (let $i = 1; $i <= 5 ; $i++){
        if ($i <= Math.floor(avg_rate)){
            star.push(<span className="fa fa-star" key={$i }></span>)
        }else if($i == Math.ceil(avg_rate)){
            const divStyle = {
                width: (avg_rate - Math.floor(avg_rate)) * 100 +"% !important",
                height: "15.9px",
                top: '-2.2px',
                left:'-0.8px'
            };
            star.push(<span className="fa fa-star disable position-relative"  key={ $i }>
                <span className="position-absolute provider-star" style={divStyle}></span>
            </span>)
        }else{
            star.push(<span className="fa fa-star disable"  key={ $i }></span>)
        }
    }
    return star;         
}

export const mapObject = (object, callback) => {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }

export function ucfirst (str) {
  str += ''
  var f = str.charAt(0)
    .toUpperCase()
  return f + str.substr(1)
}

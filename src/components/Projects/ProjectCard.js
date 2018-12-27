import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';


import './ProjectCard.scss';

export default class ProjectCard extends React.PureComponent {

  static propTypes = {
    expanded: PropTypes.bool,
    image: PropTypes.string,
    imageCentered: PropTypes.bool,
    onCollapseTransitioned: PropTypes.func,
    onToggle: PropTypes.func,
    projectId: PropTypes.number,
    summary: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    expanded: false,
  };

  onToggle = (event) => {
    if (event.target.tagName !== 'A') // Do not toggle when clicking links
      this.props.onToggle && this.props.onToggle(event, this.props.projectId);
  };

  render() {
    return (
      <Card className="ProjectCard">
        <CardActionArea onClick={this.onToggle}>
          {this.props.image &&
            <CardMedia
              className="ProjectCard__Image"
              image={this.props.image}
              title="Project image"
              style={{backgroundPosition: this.props.imageCentered? 'center' : 'left top'}}
            />
          }
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {this.props.summary}
            </Typography>
            <Collapse in={this.props.expanded} timeout={300}
                      onEntered={this.props.onCollapseTransitioned} onExited={this.props.onCollapseTransitioned}>
              <Typography component="p">
                {this.props.description}
              </Typography>
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

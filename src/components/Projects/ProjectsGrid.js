import React from 'react';
import Isotope from 'isotope-layout';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import './ProjectsGrid.scss';
import ProjectCard from './ProjectCard';
import projects from './projects';

export default class ProjectsGrid extends React.Component {
  isotope;
  lastToggledGridItem;
  lastToggledProjectId;
  zIndex = 2;

  state = {
    expandedItems: Array(projects.length).fill(false),
    projectsFilter: 'all',
  };

  componentDidMount() {
    // Initialize isotope grid
    this.isotope = new Isotope('.grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
      },
      stagger: 30,
    });
  }

  onFilterProjects = (event, value) => {
    this.setState({projectsFilter: value});
    this.isotope.arrange({filter: (value === 'all')? null : `.filter-${value}`});
  };

  onToggle = (event, projectId) => {
    const gridItem = event.target.closest('.grid-item');

    // Toggle clicked gridItem
    this.toggle(gridItem, projectId, ++this.zIndex);

    // Shrink last clicked gridItem if it is expanded and it is another gridItem
    if (this.lastToggledProjectId !== undefined && this.lastToggledProjectId !== projectId
      && this.lastToggledGridItem.classList.contains('is-expanded'))
      this.toggle(this.lastToggledGridItem, this.lastToggledProjectId, this.zIndex - 1);

    // Keep track of last expanded item
    this.lastToggledGridItem = gridItem;
    this.lastToggledProjectId = projectId;
  };

  toggle = (gridItem, projectId, zIndex) => {
    gridItem.style.zIndex = zIndex;

    // toggle ProjectCard
    this.setState(state => {
      state.expandedItems[projectId] = !state.expandedItems[projectId];
      return {expandedItems: state.expandedItems};
    });
  };

  // This is run when the vertical transition is finished
  onCollapseTransitioned = (projectCardNode) => {
    const gridItem = projectCardNode.closest('.grid-item');

    const onTransitionEnd = () => {
      // Isotope.js is not measuring gridItems properly on transition end
      // Run layout() when we are sure the transition has ended
      setTimeout(() => this.isotope.layout(), 300);
      gridItem.removeEventListener('transitionend', onTransitionEnd);
    };
    gridItem.addEventListener('transitionend', onTransitionEnd);

    gridItem.classList.toggle('is-expanded');
  };

  render() {
    return (
      <div className="ProjectsGrid">
        <Grid container justify="center">
          <Grid item>
            <ToggleButtonGroup exclusive value={this.state.projectsFilter}
                               onChange={this.onFilterProjects} className="ProjectsGrid__ToggleButton">
              <ToggleButton value='all'>All</ToggleButton>
              <ToggleButton value='professional'>Professional</ToggleButton>
              <ToggleButton value='personal'>Personal</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <div className="grid">
          <div className="grid-sizer"/>
          <div className="gutter-sizer"/>
          {projects.map((project, index) =>
            <div key={index} className={`grid-item filter-${project.filter}`}>
              <div className="grid-item-content">
                <ProjectCard
                  onCollapseTransitioned={this.onCollapseTransitioned}
                  onToggle={this.onToggle}
                  expanded={this.state.expandedItems[index]}
                  projectId={index}
                  {...project}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

}
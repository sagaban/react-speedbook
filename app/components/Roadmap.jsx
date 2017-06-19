import React from 'react';

import Card from './Card';
import IconText from './IconText';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import InputField from './InputField';

const Roadmap = () => (
  <div className="roadmap">
    <Card plain>
      <h1>Roadmap</h1>
    </Card>
    <div className="roadmap__navigation">
      <Card plain className="col--half">
        <Input className="roadmap__search">
          <InputLabel label="Search" />
          <InputField placeholder="Enter feature name" />
        </Input>
      </Card>
      <Card plain>
        <Button
          className="roadmap__category"
          label="Component" color="default" icon="cubes"
        />
        <Button
          className="roadmap__category"
          label="App" color="primary" icon="cloud"
        />
        <Button
          className="roadmap__category"
          label="Chapter" color="secondary" icon="book"
        />
      </Card>
    </div>
    <div className="feature__list">
      <div className="feature">
        <Card plain>
          <IconText
            className="success feature__likes"
            icon="heart"
            size="2x"
            text="21 likes"
            ribbon
          />
        </Card>
        <Card plain className="col--half">
          <div className="feature__detail">
            <b>Feature title here!</b><br />
            Details spilling to next line here.
          </div>
        </Card>
        <Card plain>
          <IconText
            icon="book"
            size="2x" className="secondary feature__category"
          />
        </Card>
      </div>

      <div className="feature">
        <Card plain>
          <IconText
            className="warning feature__likes"
            icon="heart"
            size="2x"
            text="1 like"
            ribbon
          />
        </Card>
        <Card plain className="col--half">
          <div className="feature__detail">
            <b>Feature two title here!</b><br />
            More details spilling to next line here.
          </div>
        </Card>
        <Card plain>
          <IconText
            icon="cubes"
            size="2x" className="default feature__category"
          />
        </Card>
      </div>
    </div>
  </div>
);

export default Roadmap;

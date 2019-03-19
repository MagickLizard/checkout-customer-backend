import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
  onClick(info) {
    // console.log('click ', info);
  }

  getMenu() {
    return (
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-info">
          <p class="title">Backend request</p>
          <p class="subtitle">Sending a request to the backend</p>
          <div class="content">
            <section class="section">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <label class="label">Purchase information please</label>
                      <div class="control">
                        <textarea class="textarea" placeholder="json request add here"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                  <div class="content">
                      <div class="control">
                        <button class="button is-large is-link submit-center">Submit</button>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

      
            );
          }
        
  render() {
    return (<div>
              <div style={{}}>{this.getMenu()}</div>
            </div>);
          }
        }
        
        export default Form

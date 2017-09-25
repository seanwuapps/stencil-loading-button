import { Component, Element, Prop, Listen } from '@stencil/core';


@Component({
  tag: 'loading-button',
  styleUrl: 'loading-button.scss'
})
export class SubmitLoadingButton {

  @Element() el: HTMLElement;
  @Prop() type: string = 'button';
  @Prop() spinnerType: string = 'android';
  @Prop() spinnerColor: string = '#000';
  
  public loading: boolean = false;

  @Listen('click')
  startLoading() {
    this.loading = !this.loading;
  }



  /**
   * The component is loaded and has rendered.
   * 
   * Updating data in this event may cause the component to re-render.
   */
  componentDidLoad() {
    console.log(this.el);
  }


  render() {
    return (
      <button 
        type={this.type} 
        class={ (this.loading) ? 'loading' : ''}
      >
        <span><slot /></span>
        <loading-spinner type={this.spinnerType} color={this.spinnerColor}></loading-spinner>
      </button>
    );
  }
}

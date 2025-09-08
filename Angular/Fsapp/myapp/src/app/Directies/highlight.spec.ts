import { Highlight } from './highlight';
import { ElementRef } from '@angular/core';
describe('Highlight', () => {
  it('should create an instance', () => {
     const elementRefMock = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new Highlight(elementRefMock);
    expect(directive).toBeTruthy();
  });
});

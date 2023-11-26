import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class PageObject<T = unknown> {
  protected readonly fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  protected getByAutomationId(automationId: string): DebugElement | null {
    return (
      this.fixture.debugElement.query(
        By.css(`[automation-id="${automationId}"]`)
      ) ?? null
    );
  }
}

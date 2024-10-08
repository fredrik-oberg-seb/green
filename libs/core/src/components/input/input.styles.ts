import { css } from 'lit'

export const styles = css`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_color-bg: var(--gds-sys-color-container-container);

      --_color-border: var(--gds-sys-color-stroke-stroke-variant1);
      --_border-radius: 0.5rem;
      --_border-width: 0.0625rem;
      --_border-width-hover: 0.125rem;

      --_color-outline-alpha: 60%;
      --_color-outline: color-mix(
        in srgb,
        var(--_color-border),
        transparent var(--_color-outline-alpha)
      );

      --_transition: var(--gds-sys-transition);
      --_lh: 1.25;
      --_core-min-block-size: 3.5rem;
      --_gap: 0.5rem;
      --_padding-block: 0.625rem;
      --_padding-inline: 1rem;
      --_core-icon-size: 1.5rem;
      --_inner-height: 2rem;
    }
  }

  @layer a11y {
    /* @media (prefers-color-scheme: dark) {
    :host {
      --_color-bg: var(--_color-bg-dark);
    }
  } */

    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }

    /* @media (prefers-contrast: more) {
    :host {
      --_color-bg: hsla(60, 4%, 96%, 1);
      --_color-outline-alpha: 0%;
    }
  } */
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      contain: layout;
      display: block;
      isolation: isolate;
    }

    .head {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-inline-end: 1rem;
    }

    label {
      font-weight: 400;
    }

    .foot {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-inline-end: 1rem;

      gds-badge {
        align-self: flex-end;
      }

      :first-child {
        flex-grow: 1;
      }
    }

    .supporting-text,
    .error-text {
      font-size: 0.875rem;
    }

    slot[name='extended-supporting-text'] {
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      display: block;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      opacity: 0;
      padding: 1rem;
      transition: var(--_transition);

      [aria-hidden='false'] & {
        opacity: 1;
      }
    }

    div.extended-supporting-text {
      display: grid;
      grid-template-rows: 0fr;
      transition: var(--_transition);

      > * {
        overflow: hidden;
      }

      &[aria-hidden='false'] {
        grid-template-rows: 1fr;
        opacity: 1;
      }
    }

    input[type='number']::-webkit-inner-spin-button {
      display: none;
    }

    input,
    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--_fs);
      line-height: var(--_lh);
      margin: unset;
      min-height: var(--_inner-height);
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;

      &:focus:not(:focus-visible) {
        outline: none;
      }

      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator {
        appearance: none;
        background-color: rgb(195, 0, 255);
        background-image: none;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
      }
    }

    textarea {
      max-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
      min-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
      overflow: hidden;
      resize: none;
      transition: unset;
    }

    .field {
      align-items: flex-start;
      background-color: var(--_color-bg);
      block-size: max-content;
      border: var(--_border-width) solid var(--_color-border);
      border-radius: var(--_border-radius);
      cursor: text;
      display: flex;
      flex-direction: row;
      gap: var(--_gap);
      justify-content: center;
      margin-block: var(--_gap);
      min-block-size: var(--_core-min-block-size);
      outline-color: transparent;
      outline-offset: var(--_border-width);
      outline-style: solid;
      outline-width: var(--_border-width-hover);
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition: var(--_transition);

      &:focus:not(:focus-visible) {
        outline: none;
      }

      &:hover {
        --_color-bg: var(--gds-sys-color-container-container-dim2);
      }

      &:has(input:focus, textarea:focus) {
        /* --_border-width: var(--_border-width-hover); */
        border: var(--_border-width) solid var(--_color-border);
        border-radius: var(--_border-radius);
        box-shadow: none;
        outline-color: var(--_color-outline);
        transition: var(--_transition);
      }

      slot {
        align-items: center;
        display: flex;
        height: var(--_inner-height);
      }
    }

    :host(:invalid) .field {
      --_color-bg: var(--gds-sys-color-status-negative-negative-bright);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
      --_color-outline: var(--gds-sys-color-stroke-stroke-negative);
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }

    :host(:invalid) .error-text {
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }

    :host(:invalid) label {
      color: var(--gds-sys-color-status-negative-on-negative-bright);
    }
  }

  @layer simplified {
    :host([variant='simplified']) label {
      align-items: center;
      background-color: transparent;
      display: block;
      height: max-content;
      inset: 0;
      width: 100%;

      div {
        line-height: var(--_lh);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: var(--_transition);
      }
    }

    :host([variant='simplified'])
      label:has(
        input:not(:placeholder-shown, [readonly]),
        textarea:not(:placeholder-shown, [readonly])
      ),
    :host([variant='simplified']) label:focus-within {
      div {
        font-size: 0.75rem;
        font-weight: 500;
        top: 0.375rem;
        transform: translateY(
          translateY(calc(0px - var(--gds-input-label-translate)))
        );
      }

      input,
      textarea {
        margin-top: 0.75rem;
      }
    }
  }
`

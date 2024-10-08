const Template = () => {
  return `
    <div class="accordion">
      <div>
        <div role="heading" aria-level="2">
          <button id="accordion-1-id" aria-expanded="true">
            <span>First accordion heading</span>
            <span>First accordion sublabel</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z" fill="#333333"/>
            </svg>
          </button>
        </div>
        <div role="region" aria-labelledby="accordion-1-id">
          <div>
            <p>This is the expanded content. Please consider the use of accordion as the content might not be found by search engines. Use if you really need to. The text should not contain more than 75 characters in a row for best readability.</p>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
      <div>
        <div role="heading" aria-level="2">
          <button id="accordion-2-id" aria-expanded="false">
            <span>Second accordion heading</span>
            <span>Second accordion sublabel</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z" fill="#333333"/>
            </svg>
          </button>
        </div>
        <div role="region" aria-labelledby="accordion-2-id" hidden>
          <div>
            <p>This is the expanded content. Please consider the use of accordion as the content might not be found by search engines. Use if you really need to. The text should not contain more than 75 characters in a row for best readability.</p>
          </div>
        </div>
        </div>
      <div>
        <div role="heading" aria-level="2">
          <button id="accordion-3-id" aria-expanded="false">
            <span>Third accordion heading</span>
            <span>Third accordion sublabel</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z" fill="#333333"/>
            </svg>
          </button>
        </div>
        <div role="region" aria-labelledby="accordion-3-id" hidden>
          <div>
            <p>This is the expanded content. Please consider the use of accordion as the content might not be found by search engines. Use if you really need to. The text should not contain more than 75 characters in a row for best readability.</p>
          </div>
        </div>
      </div>
    </div>`
}

export default {
  title: 'Components/Accordion',

  parameters: {
    componentIds: ['component-accordion'],
  },
}

export const Accordion = {
  render: Template.bind({}),
  name: 'Accordion',
}

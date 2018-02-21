export default function focusWithin(document, opts) {
	const { className = '', attr = 'focus-within' } = Object(opts);
	const lastElements = [];

	function onfocuschange() {
		let lastElement;

		while (lastElement = lastElements.pop()) {
			if (attr) {
				lastElement.removeAttribute(attr);
			}

			if (className) {
				lastElement.classList.remove(className);
			}
		}

		let activeElement = document.activeElement;

		// only add focus if it has not been added and is not the document element
		if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
			while (activeElement && activeElement.nodeType === 1) {
				if (attr) {
					activeElement.setAttribute(attr, '');
				}

				if (className) {
					activeElement.classList.add(className);
				}

				lastElements.push(activeElement);

				activeElement = activeElement.parentNode;
			}
		}
	}

	function initialize() {
		document.addEventListener('focus', onfocuschange, true);
		document.addEventListener('blur', onfocuschange, true);
	}

	/**
	 * Callback wrapper for check loaded state
	 */
	/* eslint-disable */
	!function load() {
		if (/m/.test(document.readyState)) {
			document.removeEventListener('readystatechange', load) | initialize();
		} else {
			document.addEventListener('readystatechange', load);
		}
	}()
	/* eslint-enable */
}

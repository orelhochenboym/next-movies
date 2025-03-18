import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    /**
     * Updates the media query match state.
     *
     * This event handler is invoked when the media query evaluation changes. It sets the corresponding state to reflect whether the media query currently matches.
     *
     * @param event - The media query event containing the updated match state.
     */
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
};

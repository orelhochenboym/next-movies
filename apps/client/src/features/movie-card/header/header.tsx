import { FindAllMoviesDto } from '@next-movies/types';
import { decodeHtml } from '../../../utils/decode-html.util';
import React from 'react';

type Props = Pick<FindAllMoviesDto[number], 'image' | 'title' | 'released'>;

export const Header: React.FC<Props> = ({ image, title, released }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt={title} className="w-full self-center" />

      <h1 className="font-[Georgia] text-xl md:text-3xl">
        {decodeHtml(title)} ({released})
      </h1>
    </div>
  );
};

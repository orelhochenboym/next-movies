import React, { useState } from 'react';
import { useMediaQuery } from '../../hooks/use-media-query';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/dialog';
import { Button } from '../../components/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/drawer';
import { SlidersHorizontal, X } from 'lucide-react';
import { RatingFilter } from './components/rating-filter';
import { RuntimeFilter } from './components/runtime-filter';
import { ReleaseDateFilter } from './components/release-date-filter';
import { TypeFilter } from './components/type-filter';

export const Filters: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const trigger = (
    <Button className="animate-in fade-in aspect-square rounded-none border-none p-2 delay-[3000ms] duration-700 ease-in-out">
      <SlidersHorizontal />
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="flex flex-col justify-start gap-4 sm:max-w-[425px] lg:p-4">
          <div className="flex h-fit w-full justify-end">
            <DialogClose className="h-fit w-fit border-none p-2">
              <X />
            </DialogClose>
          </div>

          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
            <DialogDescription>
              Choose the filter to search movies by
            </DialogDescription>
          </DialogHeader>
          <div className="grid h-full w-full grid-cols-2 flex-col items-center justify-center gap-8 text-xl">
            <TypeFilter />
            <ReleaseDateFilter />
            <RatingFilter />
            <RuntimeFilter />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>
            Choose the filter to search movies by
          </DrawerDescription>
        </DrawerHeader>

        <div className="grid h-full w-full grid-cols-2 flex-col items-center justify-center gap-8 md:text-xl">
          <TypeFilter />
          <ReleaseDateFilter />
          <RatingFilter />
          <RuntimeFilter />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

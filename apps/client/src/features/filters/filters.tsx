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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/drawer';
import { SlidersHorizontal, X } from 'lucide-react';

export const Filters: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
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
          <div className="flex h-full w-full flex-col items-start justify-center gap-8">
            <div>Movie Or Series</div>
            <div>Release Date</div>
            <div>Rating</div>
            <div>Runtime</div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

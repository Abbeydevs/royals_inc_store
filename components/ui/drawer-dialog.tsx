// "use client";

// import * as React from "react";

// import getProducts from "@/actions/get-products";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import Filter from "@/app/(routes)/category/[categoryId]/components/filter";
// import getSizes from "@/actions/get-sizes";
// import getCategory from "@/actions/get-category";

// interface DrawerDialogProps {
//   params: {
//     categoryId: string;
//   };
//   searchParams: {
//     colorId: string;
//     sizeId: string;
//   };
// }

// export const DrawerDialog: React.FC<DrawerDialogProps> = async ({
//   params,
//   searchParams,
// }) => {
//   const products = await getProducts({
//     categoryId: params.categoryId,
//     colorId: searchParams.colorId,
//     sizeId: searchParams.sizeId,
//   });
//   const sizes = await getSizes();
//   const category = await getCategory(params.categoryId);

//   const [open, setOpen] = React.useState(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   if (isDesktop) {
//     return (
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button variant="outline">Filter By</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Filter By</DialogTitle>
//             <DialogDescription>
//               You can filter by Sizes and Categories.
//             </DialogDescription>
//           </DialogHeader>
//           <Filter valueKey="sizeId" data={sizes} name="Sizes" />
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button variant="destructive">Cancel</Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Filter By</Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Filter By</DrawerTitle>
//           <DrawerDescription>
//             You can filter by Sizes and Categories.
//           </DrawerDescription>
//         </DrawerHeader>
//         <DrawerFooter className="pt-2">
//           <DrawerClose asChild>
//             <Button variant="destructive">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// };

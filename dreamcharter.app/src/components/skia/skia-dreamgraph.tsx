import { useDreamGraphContext } from '@/hooks/skia/use-dreamgraph-context';
import { useDreamGraphProvider } from '@/hooks/skia/use-dreamgraph-provider';
import {
  DreamGraphLink,
  DreamGraphLinks
} from '@/utils/types/dreamgraph-props';
import { useEffect, useMemo, useState } from 'react';
import {
  useCompetingGestures,
  usePanGesture,
  useTapGesture
} from 'react-native-gesture-handler';
import {
  Circle,
  Fill,
  Path,
  SkColor,
  Skia,
  SkSize,
  useCanvasRef,
  useCanvasSize
} from 'react-native-skia';
import { SkiaGestureCanvas } from './skia-gesture-canvas';

export default function SkiaDreamGraph() {
  // Create debug state values for tracking gestures
  const [gestureBegin, setGestureActivate] = useState<undefined | string>();
  const [gestureUpdate, setGestureUpdate] = useState<undefined | string>();
  const [gestureEnd, setGestureEnd] = useState<undefined | string>();

  // Get the width and height from the size of the Skia canvas
  const {
    size: { width, height },
    onLayout
  } = useCanvasSize();

  // Get the RefObject containing the ref to the Skia Canvas
  // This preserves the state of the Skia canvas when navigating across different tabs
  const canvasRef = useCanvasRef();

  // Set the state for the DreamChart Skia component including context, links, backgroundColor and size
  const dreamGraphContext = useDreamGraphContext();
  const [links, setLinks] = useState<DreamGraphLinks>(
    dreamGraphContext.state.links
  );
  const [backgroundColor, setBackgroundColor] = useState<SkColor>(
    dreamGraphContext.state.backgroundColor
  );
  const [size, setSize] = useState<SkSize>(dreamGraphContext.state.size);

  const renderLinks = useMemo(
    () =>
      links.map((dreamGraphLink: DreamGraphLink, index) => {
        const c = dreamGraphLink.currentNode;
        const n = dreamGraphLink.nextNode;
        const p = dreamGraphLink.path;
        const renderedPath = Skia.PathBuilder.Make()
          .moveTo(c.position.x, c.position.y)
          .addPath(Skia.Path.Make())
          .lineTo(n.position.x, n.position.y)
          .close()
          .build();
        if (c)
          return (
            <Circle
              key={index}
              cx={c.position.x}
              cy={c.position.y}
              r={c.radius}
              color={c.colour}
            />
          );
        if (n)
          return (
            <Circle
              key={index}
              cx={n.position.x}
              cy={n.position.y}
              r={n.radius}
              color={n.colour}
            />
          );

        if (p)
          return (
            <Path
              key={index}
              path={renderedPath}
              color={p.colour}
              strokeWidth={p.strokeWidth}
            />
          );
      }),
    [links, canvasRef]
  );

  // Reset or initialise the state of the DreamChart with the values in its state
  useEffect(() => {
    const initState = dreamGraphContext.addListener(state => {
      setLinks(state.links);
      setBackgroundColor(state.backgroundColor);
      setSize(state.size);
    });
    return () => {
      initState;
    };
  }, [dreamGraphContext, canvasRef]);

  function renderLink() {
    dreamGraphContext.commands.addLink(
      {
        position: Skia.Point(300, 300),
        radius: 5,
        colour: 'blue'
      },
      {
        position: Skia.Point(400, 100),
        radius: 6,
        colour: 'red'
      },
      {
        pathStartPosition: Skia.Point(0, 0),
        pathEndPosition: Skia.Point(5, 10),
        strength: 10,
        colour: 'black'
      } // The points at the start and end of the path must match the positions of the current and next nodes
    );
    console.log('Link Rendered');
  }

  function setCanvasBackgroundColor() {
    dreamGraphContext.commands.setBackgroundColor(Skia.Color('black'));
  }

  const panGesture = usePanGesture({
    onActivate: gesture => {
      // Set debug values to determine gesture position
      setGestureActivate(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    },
    onUpdate: gesture => {
      setGestureUpdate(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    },
    onFinalize: gesture => {
      // Set debug values to determine gesture position
      setGestureEnd(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}}`);
    },
    averageTouches: true, // This only works with Android when getting the average position
    minDistance: 1
  });

  const tapGesture = useTapGesture({
    onActivate: gesture => {
      renderLink();
    }
  });

  const composedGesture = useCompetingGestures(panGesture, tapGesture);

  const DreamGraphProvider = useDreamGraphProvider();

  return (
    <DreamGraphProvider>
      <SkiaGestureCanvas
        ref={canvasRef}
        gesture={composedGesture}
        style={{ height: 500, width: 750 }}>
        <Fill color={backgroundColor} />
        {renderLinks}
      </SkiaGestureCanvas>
    </DreamGraphProvider>
  );
}
